import React,{useState,useReducer} from 'react';
import { Button, Modal, ModalHeader, ModalBody,Form,FormGroup,Input,FormFeedback } from 'reactstrap';
import shortid from 'shortid';


const initialState = {
    title:'',
    description:'',
}
function reducer(formstate,{field,value}){
    return{
        ...formstate,
        [field]:value
    }
}
const defaultOptions = [
    {id:shortid.generate(),value:'',vote:0},
    {id:shortid.generate(),value:'',vote:0},
];

function PollModal({modal,toggle,submit}) {

    const [basetitle,setTitle] = useState('');
    const [descript,setDescript] = useState('');
    const [options,setOptions] = useState(defaultOptions);
    const [errors,setErrors] = useState({});
    const [formstate,dispatch] = useReducer(reducer,initialState);
    let {title,description} = formstate;

    const handleChange = e => {
        dispatch({field:e.target.name,value:e.target.value})
        setTitle(title)
        setDescript(description)
    }
    const handleOptionChange = (event,index) => {
        const option = [...options];
        option[index].value = event.target.value;
        setOptions(option);
    }
   
    const createOptions = () => {
        const option = [...options];
        if(option.length < 5){
            option.push({
                id:shortid.generate(),
                value:'',
                vote: 0
            })
           setOptions(option);
        }
        else{
            alert("You can create max 5 options");
        }
    }
    const deleteOption = index => {
        const option = [...options];
        if(option.length > 2){
            option.splice(index,1);
            
            setOptions(option);
           
        }else{
            alert('You must atleast two options');
        }
    }

    const validate = () =>{
        const errors = {}
        if(!basetitle){
            errors.title = 'Please Provide A Poll Title';
        }else if(basetitle.length < 5){
            errors.title = 'Title too short';
        }else if(basetitle.length > 100){
            errors.title = 'Title too long'
        }

        if(!descript){
            errors.description = 'Please Provide A Poll description';
        
        }else if(descript.length > 500){
            errors.description = 'Description too long'
        }
        const optionError = []
        options.forEach((opt,index)=>{
            if(!opt.value){
            optionError[index] = "Option Empty";
            }else if(opt.value.length > 10){
                optionError[index] = 'Option Text too long';
            }
        })
        if(optionError.length>0){
            errors.options = optionError
        }
        return {
            errors,
            isValid:Object.keys(errors).length === 0
        }

    }
    const state = {
        title:basetitle,
        description:descript,
        options:options
    }
    // console.log( state.options)
    const handleSubmit = e => {
        e.preventDefault();
        const {isValid,errors} = validate();
        const option = [...defaultOptions];
        
        if(isValid){
            submit(state);

            // rsetting form
            e.target.reset();
           
            // setTitle('');
            // setDescript('');
            // setOptions([]);
            
             setErrors({});
        }else{
            setErrors(errors);
        }
        
        
    }

    return (
        <div>
            <Button color="success" onClick={toggle}>Add Poll</Button>
            <Modal isOpen={modal} toggle={toggle} unmountOnClose={true}>
                <ModalHeader toggle={toggle}>Create A New Poll</ModalHeader>
                <ModalBody>
                <Form onSubmit={ handleSubmit }>
                <FormGroup>
                    <Input type="text" placeholder="Give a poll title" className="my-2" value={basetitle !==''? title:''} onChange={handleChange} name="title" invalid ={errors.title ? true : false}
                    />
                    {errors.title && <FormFeedback>{errors.title}</FormFeedback>}

                    <Input type="textarea" placeholder="Give a poll description" name="description" onChange={handleChange} value={descript !== '' ? description :''} invalid ={errors.description ? true : false}/>
                    {errors.description && <FormFeedback>{errors.description}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                   <div> <span>Enter a option</span> <Button color="info" className="ml-3" onClick={createOptions}>Add New Options</Button> </div> 
                   {options.map((opt,ind)=>(
                       <div className="d-flex my-2" key={opt.id}>
                           <Input value={opt.value !== '' ? opt.value: ''} onChange={e => handleOptionChange(e,ind)} invalid={errors.options && errors.options[ind] ? true : false}/>
                           <Button color="danger" disabled={options.length <= 2} className="ml-2" onClick={()=> deleteOption(ind)}>Delete</Button>
                           {errors.options && <FormFeedback>{errors.options[ind]}</FormFeedback>}
                       </div>
                   ))}
                </FormGroup>
                <Button color="primary">Create Poll</Button>
            </Form>
            </ModalBody>
            
        </Modal>
    </div>
    )
}

export default PollModal
