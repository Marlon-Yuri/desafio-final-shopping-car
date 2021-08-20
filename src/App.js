import React, { Component } from 'react'
import styled from 'styled-components'

const Div = styled.div`
border:solid 1px;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
width: 20vw;
`
const Box = styled.div`
display: flex;
flex-wrap:wrap;
justify-content: space-between;
width: 63vw;
height:100vh;

`
const Header = styled.header`
width:100%;
display:flex;
justify-content:center;
`
const Container = styled.div`
display: flex;
justify-content: space-evenly;

`
const Carrinho = styled.div`
width: 27vw;
display: flex;
flex-direction:column;
height:70vh;
border: solid 1px black;
`
const Title = styled.div`
height: 5vh;
background-color:#DCDCDC;
border: solid 1px gray;
align-items:center;
display:flex;
width: 100%;
display:flex;
justify-content:space-between;
`
const ShopTitle = styled.div`
border: solid blue;
display: flex;
justify-content:space-between;

`
const ShopSubtitle = styled.div`
display: flex;
justify-content:space-evenly;
width:20vw;
`

const TotalPrize = styled.div`
font-size: 1vw;
display:flex;
width: 23vw;
justify-content: space-between;
`

const Left= styled.div`
border:solid black

`
export default class App extends Component {

  state = {
    Carros: [
      {
        id: 1,
        nome: "Jetta",
        montadora: "Volkswagen",
        preço: "144.000",
        tipo: "Sedan"
      },

      {
        id: 2,
        nome: "Polo",
        montadora: "Volkswagen",
        preço: "70.000",
        tipo: "Hatch"
      },

      {
        id: 3,
        nome: "T-Cross",
        montadora: "Volkswagen",
        preço: "123.000",
        tipo: "SUV"
      },

      {
        id: 4,
        nome: "Tiguan R-line",
        montadora: "Volkswagen",
        preço: "146.000",
        tipo: "SUV"
      },

      {
        id: 5,
        nome: "Civic",
        montadora: "Honda",
        preço: "115.000",
        tipo: "Sedan"
      },

      {
        id: 6,
        nome: "Corolla",
        montadora: "Toyota",
        preço: "110.000",
        tipo: "Sedan"
      },

      {
        id: 7,
        nome: "Corolla Cross",
        montadora: "Toyota",
        preço: "184.000",
        tipo: "SUV"
      },

      {
        id: 8,
        nome: "Compass",
        montadora: "Jeep",
        preço: "132.000",
        tipo: "SUV"
      },

      {
        id: 9,
        nome: "Golf GTI",
        montadora: "Volkswagen",
        preço: "138.000",
        tipo: "Hatch"
      },

    ],
    Carrinho: [],




  }
  add = (item) => {
    const { Carrinho } = this.state;
    this.setState({
      Carrinho: Carrinho.concat(item),
      id: Date.now()

    })
  }

  remove = (id) => {
    const { Carrinho } = this.state;
    this.setState({
      Carrinho: Carrinho.filter((item) => {
        return item.id !== id;
      })

    })
  }

  

  render() {
    return (

      <div>
        <Header>
          <h1>Loja de Carros ! </h1>
        </Header>

        <Container>


          <Box>
            {this.state.Carros.map((item, id) => (
              <Div>
                <Title>
                  {item.nome}
                  <button onClick={() => {
                    this.add(item)
                  }}>+</button>
                </Title>

                <p><b>Montadora:</b> {item.montadora}</p>
                <p><b>Preço:</b> {item.preço}</p>
                <p><b>Tipo:</b> {item.tipo}</p>
              </Div>

            ))}
          </Box>
          <div>
          <Carrinho>
            <ul>
              {this.state.Carrinho.map((item, id) => (
                <div>
                  <ShopTitle>
                    {item.nome}
                    <button onClick={() => {
                      this.remove(item.id)
                    }}>-</button>
                  </ShopTitle>
                  <ShopSubtitle>
                    <strong>Tipo</strong>:{item.tipo}
                    <strong>Preço</strong>:{item.preço}
                  </ShopSubtitle>

                </div>
              ))}
            </ul>

          </Carrinho>
          <TotalPrize>
          <h2>
            Total:
          </h2>
          <h2>R$</h2>
        </TotalPrize>
          </div>

        </Container>
        <>

        
        </>
      </div>
    )
  }
}