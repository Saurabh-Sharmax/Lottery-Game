import { useState } from "react";
import { genTicket,sum } from "./Helper";
import Ticket from "./Ticket";

export default function Lottery({n=3 , winCondition}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);
    return(
        <div>
            <h1>Lottery Game!</h1>
         <Ticket ticket={ticket}></Ticket>
            <br />
            <button onClick={() => setTicket(genTicket(n))}>
  Generate Ticket Number
</button>

            <h3>{isWinning && "🎉 Congratulations, you Won! 🥳🎊"}</h3>


        </div>
    )
}