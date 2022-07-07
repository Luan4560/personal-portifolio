import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Breathe } from "../../components/Animation/breath";

import ProfileImage from '../../assets/profile.png';
import * as SC from './styles'

export const Home = () => {
  return (
   <>
    <Header title="Portifolio"/>
      <SC.Container>
        <h1>Welcome to my portifolio</h1>

        <section>
          <div>
            <h2>Luan Nascimento</h2>
            <p>
              Hi, my name is Luan!😎
              I am a frontend developer with focus on React, React Native, 
              Next.JS and Typescript.
            </p>
          </div>
          <div className="profile-image">
            <img src={ProfileImage} alt="" />
          </div>
        </section>

        <section className="card-content">
          <Card image="https://images.unsplash.com/photo-1656765152413-a8b972b66cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
          <Card image="https://images.unsplash.com/photo-1656765152413-a8b972b66cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
          <Card image="https://images.unsplash.com/photo-1656765152413-a8b972b66cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
          <Card image="https://images.unsplash.com/photo-1656765152413-a8b972b66cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
          <Card image="https://images.unsplash.com/photo-1656765152413-a8b972b66cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
        </section>

        <Footer />
      </SC.Container>
   </>
  )
}