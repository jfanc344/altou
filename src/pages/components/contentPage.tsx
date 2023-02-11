import { type NextPage } from "next"
import React, { useState } from 'react'
import Image from "next/image"


const ContentPage =  () => {

  const [projects, setProjects] = useState([
    {
      name: 'Torafu architects',
      image: require('../../../public/images/1.jpg'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      dotpoints: [ 'Brand concept', 'Creative Direction', 'digital Design'],
      expanded: false
    },
    {
      name: 'Arde Skincare',
      image: require('../../../public/images/2.jpg'),
      description: 'us error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam ',
      dotpoints: [ 'Brand concept', 'Creative Direction'],
      expanded: true
    },
    {
      name: 'Crontraband',
      image: require('../../../public/images/3.jpg'),
      description: 'o eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum q',
      dotpoints: [ 'Brand concept', 'Creative Direction', 'digital Design'],
      expanded: false
    },
    {
      name: 'Crontraband',
      image: require('../../../public/images/3.jpg'),
      description: 'o eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum q',
      dotpoints: [ 'Brand concept', 'Creative Direction Brand concept Brand concept', 'digital Design', 'digital Design'],
      expanded: false
    }
  ]);

  const handleExpandProject = (index: number) => {
    let newArr = [...projects]
    newArr[index]!.expanded = !newArr[index]!.expanded
    setProjects(newArr)

  }

  const ProjectsComponent = () => {


    {projects.map((project, index) => {
      return (
        <div className="w-min flex items-center">
          <div className="border border-black mx-20 w-[35rem] h-[55rem]">
            <p>{project.name}</p>
          </div>
        </div>
      )
    })}

    return (<div>test</div>)
  }

  return (
    <>
      <div className="h-full inline-flex">
        <div className="w-20 flex items-center mr-16 ml-60">
          <div className="w-[35rem] h-5/6 max-h-[50rem] border-r-2 border-black text-center relative">
            <p className="bg-primary w-[16rem] h-fit mt-60 text-3xl font-plain-regular -left-[3.25rem] -rotate-90 absolute bottom-40">some projects </p>
          </div>
        </div>


        {projects.map((project, index) => {
          return (
            <div className="flex items-center" key={index}>
              <div className="border-2 border-secondary mx-16 w-[30rem] h-5/6 max-h-[50rem] flex flex-col">


                <div className="border-b-2 border-secondary flex justify-between items-center">
                  <p className="text-2xl font-plain-bold p-4 pl-6">{project.name}</p>
                  <div className="mr-6 cursor-pointer">
                    {project.expanded ? (
                      <a onClick={() => handleExpandProject(index)} className="bg-secondary hover:bg-primary hover:text-black text-white px-7 py-1 rounded-full text-base font-plain-regular outline outline-offset-2 outline-2 select-none">Less</a>
                    ) : (<a onClick={() => handleExpandProject(index)} className="text-secondary hover:bg-secondary hover:text-white px-7 py-1 rounded-full text-base font-plain-regular outline outline-offset-2 outline-2 select-none">More</a>)}

                  </div>
                </div>

                {project.expanded ? (
                  <div className="border-b-2 border-secondary">
                    <div className="w-full h-auto">
                      <p className="text-lg p-4 font-plain-ultra-light">{project.description}</p>
                    </div>

                    <div className="grid grid-cols-2 pb-4">
                      {project.dotpoints.map(dotpoint => (
                          <p className="text-lg p-2 pb-0 pl-4 font-plain-ultra-light"> {'\u2022'} {dotpoint}</p>
                        )
                      )}
                    </div>
                    
                  </div>
                ) : (<></>)}

                <div className=" grow flex relative overflow-hidden items-center justify-center">
                  <Image className="shrink object-cover min-h-full min-w-full absolute" src={project.image} alt="logo" priority />
                  {/* <img className="shrink object-cover min-h-full min-w-full" src={project.image} alt="logo"></img> */}
                </div>

              </div>
            </div>
          )
        })}




      </div>
    </>

  )
}

export default ContentPage;



