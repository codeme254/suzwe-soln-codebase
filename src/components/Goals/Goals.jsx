import React from 'react';
import Goal from '../Recom-Goals/Goal';

const Goals = () => {
    const goals = [
        {
          goal: "Increase your produce",
          description:
            "Help us help you.  We shall help you sell your produce to firms search as Twiga foods.Promoting our local agriculture is  our  mission",
        },
        {
          goal: "Making Fertilizers more acessible",
          description:
            "Get fertilizers at  subsidized rates. We  wilol deliver  it at your door step . Contact us for more information ",
        },
        {
          goal: "Help your fellow farmer ",
          description:
            "Take pqart in community intiatives to  bring change to  your community",
        },
        // {
        //   goal: "Efficient farming recommendations",
        //   description:
        //     "We are planning to teach 3K+ farmers on efficient farming methods and best fertilizers and pesticides to use before the end of 2022.",
        // },
      ];
    return(
        <section className="goals-l">
           <div className="goals-l__container">
               {
                   goals.map((el, i) => <Goal title={el.goal} description={el.description} key={i} />)
               }
           </div>
        </section>
    )
}

export default Goals; 