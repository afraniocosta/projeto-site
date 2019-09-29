import React from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './home.scss'
import afranio from '../../assets/afranio.png'

function Home () {
  return (
      <>
        <div id="home" className="container">
          <Header />
          <div className="row">
          
            <div className="col-12 col-md-6 col-lg-6 offset-lg-1 order-lg-2 mt-5">
              <img src={afranio} alt="Afrânio"/>
            </div>

            <div className="col-12 col-md-6 col-lg-5 mt-3">
              <h2 className="mt-5 green-text">
              Front-End
              </h2>  
            
              <p className="mt-3 gray-text"> 
                Me formei em Publicidade e Propaganda em meados de xxxx, mas nessa época fui chamado pra uma "encrenca" em uma agêncua recém criada. 
              </p>
            
            </div>

          </div>

        </div>
      <Footer />
      </>
  )
}

export default Home;