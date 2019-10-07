import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'


import api from '../services/api'
import ProductForm from './productForm'
import ProductList from './productList'


class ProductBox extends Component {

  state = {
    data: [],
    id: '',
    name: '',
    description: '',
    price: '',
    edit: false
  }

  componentDidMount =  () => {

    this.loadProducts()   

  }

  loadProducts = async () => {

    const products = await api.get('/product')
    
    this.setState({
      data: products.data.products
    })   
     
  }

  handleChange = e => {
    
    this.setState({
        [e.target.name]: e.target.value
    })           

  }

  handleSave = async (e) => {

    e.preventDefault()

    try {
      if(!this.state.edit){

            await api.post('/product', {
            name: this.state.name,
            description: this.state.description,
            price: parseFloat(parseFloat(this.state.price.replace(',', '.')).toFixed(2))
          })
                  
          this.loadProducts()
          this.cleanForm()

      } else{
          
          await api.put(`product/${this.state.id}`, {
            name: this.state.name,
            description: this.state.description,
            price: parseFloat(parseFloat(this.state.price.replace(',', '.')).toFixed(2))
          })
          this.setState({
            edit: !this.state.edit
          })

          this.loadProducts()
          this.cleanForm()
      }
        
    } catch (err) {
        console.log(err)
    }        
  }

  handleEdit = (product) => {

    this.setState({
      id: product._id,
      name: product.name,
      description: product.description,
      price: product.price.toString().replace('.', ','),
      edit: true
    })

  }

  handleDelete = async (id) => {

    try {
      await api.delete(`/product/${id}`)
      this.loadProducts()
    } catch (err) {
      console.log(err)
    }

  }

  cleanForm = () =>{
    
    this.setState({
        name: '',
        description: '',
        price: ''
    })
        
  }


  render(){      

      const { name, description, price, edit } = this.state
      const values = { name, description, price }
      const products = this.state.data 
      
      return (
        <div>
         
          <Grid container space={2} className='App' style={{marginTop: '15px'}} >
            <Grid item md={5} xs={12} >              
              <ProductForm 
                values={values}
                edit={edit}
                handleChange={this.handleChange}
                handleSave={this.handleSave}
              />
            </Grid>

            <Grid item md={7} xs={12}>
              <ProductList 
                products={products}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
              />
            </Grid>

          </Grid>        
        </div>      
      );
  }
}



export default ProductBox;
