import React, { Component } from 'react'
import  Typography  from '@material-ui/core/Typography'
import  TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';



class ProductForm extends Component {
    
    render() {
        return(
            <div>                
                    <Typography variant="h4" gutterBottom>
                        {
                            !this.props.edit ? 'Novo Produto': 'Editar Produto'
                        }
                    </Typography>
                    
                    <form onSubmit={this.props.handleSave}> 
                        <TextField
                            style={styles.textField}
                            label='Nome'
                            name='name'
                            value={this.props.values.name}                        
                            onChange={this.props.handleChange}
                            required
                        />
                        <br/>
                        <TextField
                            style={styles.textField}
                            label='Descriçao' 
                            name='description'
                            value={this.props.values.description}
                            onChange={this.props.handleChange}                  
                            required
                        />
                        <br/>
                        <TextField 
                            style={styles.textField}
                            label='Preço' 
                            placeholder='R$' 
                            name='price' 
                            value={this.props.values.price}                 
                            onChange={this.props.handleChange}
                            required
                        />
                        <br/>
                        
                        <Button variant="contained" 
                                color="primary" 
                                style={styles.button} 
                                
                                type='submit'
                            >
                            { !this.props.edit ? 'Cadastrar': 'Salvar'}
                        </Button>

                    </form>
                
            </div>
        )
    }
}

const styles = {
    button: {
        marginTop: '15px',
        width: '218px',
        marginBottom: '20px'
    },
    textField: {
        marginTop: '8px'
    }
}
export default ProductForm