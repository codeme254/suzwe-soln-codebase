import React from 'react';
import Title from './../Typography/Title';
import communityImg from './../../assets/images/community.jpg';
import InitiativeCard from './InitiativeCard';

const Initiatives = () => {
    const initiatives = [
        {
            image: communityImg,
            description: 'We are planning to start a walk for call to environmental protection, in the process, we will be rasing money to plant trees, we are targetting to plant upto 2000 treeas by the end of 2022',
            linkToJoinForm: '/mandera-irrigation-project'
        },
        {
            image: communityImg,
            description: 'We are planning to start a walk for call to environmental protection, in the process, we will be rasing money to plant trees, we are targetting to plant upto 2000 treeas by the end of 2022',
            linkToJoinForm: '/mandera-irrigation-project'
        },
        {
            image: communityImg,
            description: 'We are planning to start a walk for call to environmental protection, in the process, we will be rasing money to plant trees, we are targetting to plant upto 2000 treeas by the end of 2022',
            linkToJoinForm: '/mandera-irrigation-project'
        },
    ]
    return(
        <section className="initiatives">
            <Title mainTitle="Community initiative" subTitle="Let's join hands"/>

            <div className="all-initiatives-container">
                {
                    initiatives.map((el, i) => (<InitiativeCard id={i} image={el.image} description={el.description} linkToPage={el.linkToJoinForm}/>))
                }
            </div>
        </section>
    )
}
export default Initiatives;