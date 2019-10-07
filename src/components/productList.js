import React, { Component } from 'react'
import  Typography  from '@material-ui/core/Typography'
import { Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core'


class ProductList extends Component {

    render() {
        return(
            <div>
                <Typography variant='h4'>
                    Lista de produtos
                </Typography>
                <Paper>
                   
                    <Table style={styles.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome do Produto</TableCell>
                                <TableCell>Descrição</TableCell>
                                <TableCell>Preço</TableCell>
                                <TableCell>Editar/Excluir</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.props.products.map(product => (

                                    <TableRow key={product._id}>
                                        <TableCell>{product.name}</TableCell>
                                        <TableCell>{product.description}</TableCell>
                                        <TableCell>{`R$ ${product.price.toString().replace('.', ',')}`}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => this.props.handleEdit(product)} style={styles.button}>
                                                <i className="far fa-edit"></i>
                                            </Button>
                                            <Button variant="contained" color="secondary" onClick={() => this.props.handleDelete(product._id)}>
                                                <i className="far fa-trash-alt"></i>

                                            </Button>                                          
                                        </TableCell>
                                    </TableRow>
                                ))                                
                            }
                        </TableBody>
                    </Table>
                    {
                        Number(this.props.products) === 0 && 
                        <p style={styles.p}>Nenhum produto cadastrado</p>                        
                    }
                 
                </Paper>
            </div>
        )
    }
}

const styles = {
    button: {
        marginRight: '5px',
    },
    p: {
        marginBottom: '10px',
        display: 'inline-block'
    },
    table: {
        marginBottom: '65px'
    }
}

export default ProductList