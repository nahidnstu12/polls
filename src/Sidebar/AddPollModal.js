import React,{useState,useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody,Form,FormGroup,Input,FormFeedback } from 'reactstrap';
import shortid from 'shortid';

const defaultOptions = [
    {id:shortid.generate(),value:'',vote:0},
    {id:shortid.generate(),value:'',vote:0},
];
const resetOptions = [
    {id:shortid.generate(),value:'',vote:0},
    {id:shortid.generate(),value:'',vote:0},
];

function PollModal({modal,toggle,submit,btnValue,header,poll,isUpdate}) {

    const [basetitle,setTitle] = useState('');
    const [description,setDescript] = useState('');
    const [options,setOptions] = useState(defaultOptions);
    const [errors,setErrors] = useState({});

    useEffect(() => {
        if(poll && Object.keys(poll).length>0){
            setTitle(poll.title);
            setDescript(poll.description);
            setOptions(poll.options)
        }
    },[poll])

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

        if(!description){
            errors.description = 'Please Provide A Poll description';
        
        }else if(description.length > 500){
            errors.description = 'Description too long'
        }
        const optionError = []
        options.forEach((opt,index)=>{
            if(!opt.value){
            optionError[index] = "Option Empty";
            }else if(opt.value.length > 20){
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
        description,
        options
    }
    const handleSubmit = e => {
        e.preventDefault();
        const {isValid,errors} = validate();
        if(isValid){
            if(isUpdate){
                state.id = poll.id;
                submit(state);
                alert("Update is Successfully")
            }else{
                  // rsetting form
                submit(state);
                alert("Submit Successfully");
                e.target.reset();
                setTitle('');
                setDescript('');
                setOptions(resetOptions);
                setErrors({});
            }
           
        }else{
            setErrors(errors);
        }
        
        
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} unmountOnClose={true}>
                <ModalHeader toggle={toggle}>{header}</ModalHeader>
                <ModalBody>
                <Form onSubmit={ handleSubmit }>
                <FormGroup>
                    <Input type="text" placeholder="Give a poll title" className="my-2" value={ basetitle } onChange={(e)=>setTitle(e.target.value)} name="title" invalid ={errors.title ? true : false}
                    />
                    {errors.title && <FormFeedback>{errors.title}</FormFeedback>}

                    <Input type="textarea" placeholder="Give a poll description" name="description" onChange={(e)=>setDescript(e.target.value)} value={ description } invalid ={errors.description ? true : false}/>
                    {errors.description && <FormFeedback>{errors.description}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                   <div> <span>Enter a option</span> <Button color="info" className="ml-3" onClick={createOptions}>Add New Options</Button> </div> 
                   {options.map((opt,ind)=>(
                       <div className="d-flex my-2" key={opt.id}>
                           <Input value={opt.value } onChange={e => handleOptionChange(e,ind)} invalid={errors.options && errors.options[ind] ? true : false}/>
                           <Button color="danger" disabled={options.length <= 2} className="ml-2" onClick={()=> deleteOption(ind)}>Delete</Button>
                           {errors.options && <FormFeedback>{errors.options[ind]}</FormFeedback>}
                       </div>
                   ))}
                </FormGroup>
                <Button color="primary">{btnValue}</Button>
            </Form>
            </ModalBody>
            
        </Modal>
    </div>
    )
}

export default PollModal
