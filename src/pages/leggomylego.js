import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import app_picture from '../images/leggo_my_legs_app.png'

const LeggoMyLego = () => (
  <Layout>
    <div className='container'>
      <div className='one'>
        <h1>Leggo My Lego</h1>
        <h2>A Lego Minifigure Detection Android App</h2>
        <h3>
          <a href="/leggo_my_lego.apk">&gt;&gt;&gt; Click here to Download app package &lt;&lt;&lt;</a>
        </h3>
        <p>
        ⚠ In order to install this app you will need to <a href='https://support.google.com/android/answer/9457058?hl=en'>enable apps from unknown locations.</a>
        </p>
        <hr></hr>
        <h3>#(COMPUTER) VISION</h3>
        <p>
          I have been interested in computer vision for a long time because of
          its huge potential in robotics, self-driving cars, manufacturing, 
          and many other places in life. Detecting Lego mini figures was an object 
          detection project with a real business application small enough to be completed
          in the week and a half allotted. A company I am working with has plans to make
          an app that will be able to catalog an entire Lego collection, and this is one step in that direction.
        </p>
        <h3>#DATA</h3>
        <p>
          Training data for object detection requires images and bounding boxes.
          Bounding boxes for training are usually made by hand, which is a very
          time-consuming process, but I was able to generate rendered data in such
          a way that it also generated the bounding boxes. My data generation pipeline was:
          <ul>
            <li>Generate 3D mini figures in MLCad</li>
            <li>Use Quick Macros to automate control of MLCad</li>
            <li>Convert models to POV-Ray using LDRaw Viewer</li>
            <li>Auto-modify the models using Python</li>
            <li>Render the models using POV-Ray</li>
            <li>Post processing and get bounding boxes with python</li>
          </ul>
        </p>
        <h3>#MODEL</h3>
        <p>
          I used transfer learning to get a neural network to detect the mini figures.
          Neural networks are complex algorithms that take inspiration from human brains
          and the neurons that make them up. Transfer learning is a technique that also
          imitates the way human brains work, specifically our ability to learn what a new
          object looks like without having to re-learn how to see at all.
        </p>
        <Link to="/">Go to the homepage</Link>
      </div>
      <div className='two'>
        <img className="image gallery" src={app_picture} alt="error"/>
      </div>
    </div>
  </Layout>
)

export default LeggoMyLego
