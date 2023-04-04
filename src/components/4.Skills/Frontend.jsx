import React from 'react'

const Frontend = () => {
    const frontEndSkills = ["HTML", "CSS", "JavaScript", "Bootstrap", "React", "NodeJs", "ExpressJs", "MongoDB", "Python", "C++"];
//     const backEndSkills = ["NodeJs", "ExpressJs", "MongoDB", "AWS"
// ];
    const frontEndSkillsDisplay = frontEndSkills.map((frontEndSkill)=> {
        return(
            <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">{frontEndSkill}</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                </div>
        )})
    // const backEndSkillsDisplay = backEndSkills.map((backEndSkill)=> {
    //     return(
    //         <div className="skills__data">
    //                 <i class='bx bx-badge-check' ></i>
    //                 <div>
    //                     <h3 className="skills__name">{backEndSkill}</h3>
    //                     {/* <span className="skills__level">Intermediate</span> */}
    //                 </div>
    //             </div>
    //     )})


  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                
                {frontEndSkillsDisplay}


                {/* <div className="skills__data">
                    <i class='bx bx-badge-check'></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>


                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>


            <div className="skills__group">
                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">BootStrap</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>


                <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div> */}


                {/* <div className="skills__data">
                    <i class='bx bx-badge-check' ></i>
                    <div>
                        <h3 className="skills__name"></h3>
                        <span className="skills__level"></span>
                    </div>
                </div> */}
            </div>

            {/* <div className="skills__group">
                {backEndSkillsDisplay}
            </div> */}
        </div>
    </div>
  )
}

export default Frontend