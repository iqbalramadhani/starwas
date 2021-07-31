import React, { useState } from 'react';


const SeachBoxComp = (props) => {

    // const [getInputTodo,setInputTodo] = useState('');

    const newTodo = {
        search : '',
        type   : 'characters'
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.createData(newTodo);
    }

    const handleInput = (event) => {
        newTodo[event.target.name] = event.target.value;

    }

    return(
        <div>
            <div className="offset-3 col-7">
                {/* <input type="text" name="searchbox" className="form-control" placeholder="Nama Aktor atau Filem"/> */}
                <div className="row">
                    <div className="col-sm-8">
                        <input type="text" name="search" onChange={handleInput} class="form-control" aria-label="Text input with dropdown button"/>
                    </div>
                    <div className="col-sm-2">
                        <select name="type" onChange={handleInput} className="form-control btn btn-primary">
                            <option value="characters">Characters</option>
                            <option value="filems">Films</option>
                        </select>
                    </div>
                    <div className="col-sm-1">
                        <button type="button" onClick={handleSubmit} class="btn btn-primary">Find</button>
                    </div>
                </div>
                
                
                
            </div>
            
        </div>
    )
}

export default SeachBoxComp;