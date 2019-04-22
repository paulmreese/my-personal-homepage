import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import Class from './Class/Class'
import './Classes.scss';

import plankImage from './img/Planks-thin.jpg';
import classesHeader from './img/Body-By-Brii-Classes.jpg';

const classData =[
{
  name: "30 for 30 (Lunch Break Workout)",
  description: <p>Short on time? Enjoy a <strong>full body workout</strong> with
   a 30 rep circuit training in <em>just 30 minutes</em>.</p>,
  headerImage: "./img/30for30-transparent.png",
  isFullWidth: true,
  position: "center"
},
{
  name: "Barre",
  description: <p><em>No tutus required!</em> This is a workout geared towards
    toning your body through low impact, small movements that get your <strong>
    blood pumping</strong> and <em>muscles burning</em>.</p>,
  headerImage: "./img/Barre-transparent.png",
  isFullWidth: false,
  position: "right"
},
{
  name: "Booty Camp",
  description: <p>Choreographed dance and lower body workouts. Just the right
    way to get your mind off of working out all while <em>burning calories </em>
    and <strong>having fun</strong>.</p>,
  headerImage: "./img/Booty-Camp-transparent.png",
  isFullWidth: false,
  position: "center"
},
{
  name: "GRIT",
  description: <p>Get ready to get <strong>GRITTY</strong>. This 45 minute
    class offers a mixture of shadow boxing, interval training, and cardio
    combinations that <em>will keep you moving!</em> Join us for <strong>G
    </strong>ood <strong>R</strong>eps <strong>I</strong>nterval <strong>T
    </strong>raining and take your fitness game <strong>to the next level.
    </strong></p>,
  headerImage: "./img/GRIT-transparent.png",
  isFullWidth: false,
  position: "left"
},
{
  name: "Murves",
  description:<p>Break out the light weight dumbbells and body weight movements
    and lets work on those <strong>muscles</strong> and <em>curves</em> to the
    beat of music.</p>,
  headerImage: "./img/Murves-transparent.png",
  isFullWidth: false,
  position: "center"
},
{
  name: "Not Your Mother’s Step Class",
  description: <p>Hip hop inspired. Not your average aerobic step class. We
    <strong> break it down</strong> and <em>step it up </em>
    at the same time.</p>,
  headerImage: "./img/NYMSC-transparent.png",
  isFullWidth: true,
  position: "center"
},
{
  name: "Yoga",
  description:<p><span className="class-subheading">Yolo Yoga</span> - Connect with your inner self
    while combining breathing technique, exercise, meditation, and hip hop
    tunes. This <em>funky vinyasa</em> style yoga is accessible to <strong>
    beginners</strong> and <strong>intermediate</strong> level individuals.
    <br />
    <br />
    <span className="class-subheading">Restore Yoga</span> - This yin style yoga targets the deepest
    tissues of the body while holding poses for a longer period of time. We
    will focus on meditative breathing for greater flexibilty and <strong>self
    acceptance</strong> to leave you feeling <em>refreshed and rejuvenated</em>.
    </p>,
  headerImage: "./img/Yoga-transparent.png",
  isFullWidth: false,
  position: "right"
}]

class Classes extends Component {

  handleResize = () => {
    const topOfClasses = +ReactDOM.findDOMNode(this).offsetTop
    const heightOfClasses =
      +ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const bottomOfClasses = topOfClasses + heightOfClasses
    this.props.updateClasses(bottomOfClasses)
  }

  render() {
    const { navIsOpen } = this.props
    return (

      <section className={ navIsOpen
            ? "Classes-container blurred"
            : "Classes-container"}>
        <div className="Classes-image-container">
          <img
            src={ plankImage }
            alt="Body By Brii - Planks in group class"
            className="Classes-image"/>
          <div className="Classes-image-overlay" id="classes">
          </div>
        </div>
        <img
          src={ classesHeader }
          alt="Body By Brii Classes"
          className="Classes-header"/>
        <hr />
        {classData.map(givenClass =>(
          <Class
            key = { givenClass.name }
            name = { givenClass.name }
            position = { givenClass.position }
            description = { givenClass.description }
            headerImage = { givenClass.headerImage }
            isFullWidth = { givenClass.isFullWidth }
            debounce = { this.props.debounce }/>

        ))}
      </section>
    );
  }

  componentDidMount() {
    const { debounce } = this.props
    window.addEventListener("DOMContentLoaded", this.handleResize)
    window.addEventListener('resize', debounce(this.handleResize, 32))
  }

  componentWillUnmount() {
    const { debounce } = this.props
    window.removeEventListener("DOMContentLoaded", this.handleResize)
    window.removeEventListener('resize', debounce(this.handleResize, 32))
  }
}

export default Classes;
