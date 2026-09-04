import { useState } from 'react';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Pricing from './components/Pricing';
import Process from './components/Process';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App(){
  const [loading,setLoading]=useState(true);
  return <main className="site">{loading&&<Preloader onComplete={()=>setLoading(false)}/>}<Cursor/><Hero/><Services/><Work/><Pricing/><Process/><CTA/><Footer/></main>
}
