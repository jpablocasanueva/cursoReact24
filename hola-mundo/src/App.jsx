import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const formatUserName = (userName) => `@${userName}`
    const [name, setName] = useState('midudev')
    return (
        <section className='App'>
        <TwitterFollowCard 
            formatUserName={formatUserName}
            userName={name}
            name="Miguel Angel Duran"
            intialItsFollowing={true} />
        <TwitterFollowCard 
            formatUserName={formatUserName}        
            userName="midudev" 
            name="Miguel Angel Duran"
            intialItsFollowing={true} />
            <button onClick={() => setName('Guasonico')}>
                Cambiar nombre
            </button>
        </section>
    )
}