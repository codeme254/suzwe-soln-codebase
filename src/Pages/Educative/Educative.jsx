import React from 'react'
import Navigation from '../../../src/components/Navigation/Navigation';
import EducativeHero from './EducativeComponents/EducativeHero';
import Title from '../../components/Typography/Title';
import Goal from '../../components/Recom-Goals/Goal'; 
import CommunityInitiativeFooter from '../CommunityInitiative/CommunityInitiativeFooter';

const Educative = ({ heading, explanationText, tipsTitle, tipsSubtitle ,arrayOfExplantions}) => {
    return(
        <div className='page-root-fix-header'>
            <Navigation />
            <EducativeHero title={heading} explanationText={explanationText} />

            <div className="educative-section__tips">
                <Title mainTitle={tipsTitle} subTitle={tipsSubtitle} />
                <div className="educative-section__tips-container">
                    {
                        arrayOfExplantions.map((el, i) => <Goal title={el.title} description={el.description} key={i} />)
                    }
                </div>
            </div>
            <CommunityInitiativeFooter />
        </div>
    )
}
export default Educative;