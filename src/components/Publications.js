import React from 'react'
import '../Styles/Publications.css'
import ScienceIcon from '@mui/icons-material/Science';

const customStyle = {
  backgroundColor: "#23252f",
  boxShadow: "0 4px 8px 0 rgb(255,0,0)",
  backdropFilter: "blur( 20px )",
  // webkit-backdrop-filter: "blur( 20px )",
  borderRadius: "4px",
  // border: "1px solid rgba( 255, 255, 255, 0.18 )"
}

function Publications() {
  return (
    <div>
      <div className='pb-intro-wrapper' name="Publications">
        <div className='ed-intro'>
          <div className='school-logo-container'>
            <ScienceIcon className='school-logo' fontSize='large' style={{ color: "white" }} />
          </div>
          <div className='section-title'>
            Publications
          </div>
        </div>
        <div className='ed-line'>
          A few of my research publications till date...
        </div>
      </div>
      <div className='publications-container'>
        <div className='margin-wrapper'>
          <div className='publication-wrapper'>
            <div className='publication-header-wrapper'>
              <div className='paper-title'>Understanding and Attaining an Investment Grade Rating in the Age of Explainable AI</div>
              <div className='paper-skills'>Explaiable AI, Machine Learning, Decision Tree, Computational Finance, Python</div>
            </div>
            <div>
              <div className='paper-author-list'>Ravi Makwana, Dhruvil Bhatt, Kirtan Delwadia, Agam Shah, and Bhaskar Chaudhury, “Understanding and Attaining an Investment Grade Rating in the Age of Explainable AI” published on SSRN's top 10 research papers globally (in terms of downloads) <a
                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4163283"
                className="paper-link"
                target="_blank"
                rel="noreferrer"
              >(Link to paper)</a>.</div>

            </div>
          </div>
        </div>
        <div className='margin-wrapper'>
          <div className='publication-wrapper'>
            <div className='publication-header-wrapper'>
              <div className='paper-title'>Parallel algorithm for synthetic image generation with application to tokamak plasma diagnostics</div>
              <div className='paper-skills'>High Performance Computing, Parallel Computing, Computational Plasma, C/C++, OpenMP, MPI, Python</div>
            </div>
            <div>
              <div className='paper-author-list'>Kirtan Delwadia, Dhruvil Bhatt, Shishir Purohit, and Bhaskar Chaudhury, “Parallel algorithm for synthetic image generation with application to tokamak plasma diagnostics,” published by “Concurrency and Computation: Practice and Experience” journal <a
                href="https://onlinelibrary.wiley.com/doi/10.1002/cpe.7217"
                className="paper-link"
                target="_blank"
                rel="noreferrer"
              >(Link to paper)</a>.</div>

            </div>
          </div>
        </div>
        <div className='margin-wrapper'>
          <div className='publication-wrapper'>
            <div className='publication-header-wrapper'>
              <div className='paper-title'>Computational Modeling Of Noisy Plasma Images Applicable To Tokamak Imaging Diagnostics For Visible And X-Ray Emissions</div>
              <div className='paper-skills'>Computational Plasma, Computational Physics, Tomography, C/C++, Python</div>
            </div>
            <div>
              <div className='paper-author-list'>Dhruvil Bhatt, Kirtan Delwadia, Shishir Purohit, and Bhaskar Chaudhury, “Computational Modeling Of Noisy Plasma Images Applicable To Tokamak Imaging Diagnostics For Visible And X-Ray Emissions,” accepted at “9th International Conference on Mathematics and Computing (ICMC-2023)” conference <a
                href="https://link.springer.com/chapter/10.1007/978-981-99-3080-7_13"
                className="paper-link"
                target="_blank"
                rel="noreferrer"
              >(Link to paper)</a>.</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications