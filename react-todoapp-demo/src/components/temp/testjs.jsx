
const person={
    name:'Jay',
    rank:{
        name:'pryvet',
        level:'1'
    },
    badges:['sniper','cook','hacker'],
    printBadges: () => {
        person.badges.map(
            badge => console.log(badge)
        )
    }
}

export default function TestJS1(){
    return(
        <>
        <div className="testjs1">inside testjs1 component. Hello {person.name}. 
        Your rank is {person.rank.name}. Level {person.rank.level}</div>
        <div>I'm a {person.printBadges()}</div>
        </>
    )
} 