import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className='App'>
        <TwitterFollowCard 
            formatUserName={formatUserName}
            isFollowing
            userName="midudev" 
            name="Miguel Angel Duran"/>
        <TwitterFollowCard 
            formatUserName={formatUserName}        
            isFollowing={false}  
            userName="midudev" 
            name="Miguel Angel Duran"/>
        <TwitterFollowCard 
            formatUserName={formatUserName}
            isFollowing  
            userName="billgates"
            name="Bill Gates"/>
        <TwitterFollowCard 
            formatUserName={formatUserName}
            isFollowing  
            userName="elonmusk"
            name="Elon Musk"/>
        </section>
    )
}