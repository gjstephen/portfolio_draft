import './style/projects.scss'
import { images } from '../images/images'

function Projects() {
  const { accountingImage, iChewsYouImage, recipeKeeperImage, ticTacToeImage, gitHubLogo, websiteLogo } = images

  return (
    <div className="about-me">
      <h1>Projects</h1>

      <section className="project-list">
        <div className="project">
            <div>
              <h3>Simple Accounting App - GA</h3>
              <hr />

              <ul className="list">
                <li>
                  <a href="https://accounting-app.fly.dev/" target="_blank" rel="noreferrer">
                    <button>
                      <img className='gh-logo' src={websiteLogo} alt="gitHub Logo" />
                      <p>Live Site</p>
                    </button>
                  </a>
                </li>

                <li>
                  <a href="https://github.com/gjstephen/accounting-app-react" target="_blank" rel="noreferrer">
                    <button>
                      <img className='gh-logo' src={gitHubLogo} alt="gitHub Logo" />
                      <p>GitHub</p>
                    </button>
                  </a>
                </li>
              </ul>

              <img src={accountingImage} alt="" />

              <p className='project-text'>This is a simple accounting app that allows users to record transactions as manual journals and them in a variety of reports.</p>
            </div>

            <hr />

            <ul className="list">
              <li>React.js</li>
              <li>Express.js</li>
              <li>PSQL</li>
            </ul>
        </div>

        <div className="project">
            <div>
              <h3>I Chews You - GA</h3>
              <hr />

              <ul className="list">
                <li>
                  <a href="https://github.com/gjstephen/I-Chews-You---Food-App" target="_blank" rel="noreferrer">
                    <button>
                      <img className='gh-logo' src={gitHubLogo} alt="gitHub Logo" />
                      <p>GitHub</p>
                    </button>
                  </a>
                </li>
              </ul>

              <img src={iChewsYouImage} alt="" />

              <p className='project-text'>This was a group project that incorporated the Spoonacular API to allow users to search for and leave comments on recipes.</p>
            </div>

            <hr />

            <ul className="list">
              <li>Express.js</li>
              <li>PSQL</li>
            </ul>
        </div>

        <div className="project">
            <div>
              <h3>Recipe Keeper - GA</h3>
              <hr />

              <ul className="list">
                <li>
                  <a href="https://recipe-keeper.fly.dev/" target="_blank" rel="noreferrer">
                    <button>
                      <img className='gh-logo' src={websiteLogo} alt="gitHub Logo" />
                      <p>Live Site</p>
                    </button>
                  </a>
                </li>

                <li>
                  <a href="https://github.com/gjstephen/recipe_keeper" target="_blank" rel="noreferrer">
                    <button>
                      <img className='gh-logo' src={gitHubLogo} alt="gitHub Logo" />
                      <p>GitHub</p>
                    </button>
                  </a>
                </li>
              </ul>

              <img src={recipeKeeperImage} alt="" />

              <p className='project-text'>This app allows users to create and manage their own recipe collection, as well as explore those of other users.</p>
            </div>

            <hr />

            <ul className="list">
              <li>Ruby</li>
              <li>Sinatra</li>
              <li>PSQL</li>
            </ul>
        </div>

        <div className="project">
            <div>
              <h3>Tic Tac Toe - GA</h3>
              <hr />

              <ul className="list">
                <li>
                  <a href="https://gjstephen.github.io/tic-tac-toe/" target="_blank" rel="noreferrer">
                    <button>
                      <img className='gh-logo' src={websiteLogo} alt="gitHub Logo" />
                      <p>Live Site</p>
                    </button>
                  </a>
                </li>

                <li>
                  <a href="https://github.com/gjstephen/tic-tac-toe" target="_blank" rel="noreferrer">
                    <button>
                      <img className='gh-logo' src={gitHubLogo} alt="gitHub Logo" />
                      <p>GitHub</p>
                    </button>
                  </a>
                </li>
              </ul>

              <img src={ticTacToeImage} alt="" />

              <p className='project-text'>Feel free to play a classic game of Tic Tac Toe where you are able to select from a variety of themes.</p>
            </div>

            <hr />

            <ul className="list">
              <li>JavaScript</li>
              <li>HTML 5</li>
              <li>CSS</li>
            </ul>
        </div>
      </section>
    </div>
  )
}

export default Projects