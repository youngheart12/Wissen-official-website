import React,{Component} from 'react';
import Layout from '../Layout-part1/layoutpart1';
import Dark from '../DarkBackground/darkbackground';
import Expert from '../Expertise/expertise';
import Zigzag from '../Zigzag/zigzag';
import Zigzag1 from '../Zigzag/zigzag1';
import Zigzag2 from '../Zigzag/zigzag2';
import Zigzag3 from '../Zigzag/zigzag3';
import Footer from '../Footer/footer';

//import Join from '../Joinus/joinus';
import '../../App.css';

class MainLayout extends Component
{
    render()
    {
        return (
            
            <div>
            <Layout></Layout>
            <Dark></Dark>
            <Expert></Expert>
            <Zigzag></Zigzag>
            <Zigzag1></Zigzag1>
            <Zigzag2></Zigzag2>
           <Zigzag3></Zigzag3>
           <Footer></Footer>
            </div>
           );
    }
}
export default MainLayout;