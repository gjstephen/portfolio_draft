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
              <section className='project-wrapper'>
                <h3>Simple Accounting App - GA</h3>

                <ul className="list">
                  <li className='tech'>React.js</li>
                  <li className='tech'>Express.js</li>
                  <li className='tech'>PSQL</li>
                </ul>

                <p className='project-text'>This is a simple accounting app that allows users to record transactions as manual journals and view them in a variety of reports.</p>

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
              </section>
            </div>

            <aside>
              <img src={accountingImage} alt="" />
            </aside>
        </div>

        <div className="project">
            <div>
              <section className='project-wrapper'>
                <h3>I Chews You - GA</h3>

                <ul className="list">
                  <li className='tech'>Express.js</li>
                  <li className='tech'>PSQL</li>
                </ul>

                <p className='project-text'>This was a group project that incorporated the Spoonacular API to allow users to search for and leave comments on recipes.</p>

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
              </section>
            </div>

            <aside>
              <img src={iChewsYouImage} alt="" />
            </aside>
        </div>

        <div className="project">
            <div>
              <section className='project-wrapper'>
                <h3>Recipe Keeper - GA</h3>

                <ul className="list">
                  <li className='tech'>Ruby</li>
                  <li className='tech'>Sinatra</li>
                  <li className='tech'>PSQL</li>
                </ul>

                <p className='project-text'>This app allows users to create and manage their own recipe collection, as well as explore those of other users.</p>

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
              </section>
            </div>

            <aside>
              <img src={recipeKeeperImage} alt="" />
            </aside>
        </div>

        <div className="project">
            <div>
              <section className='project-wrapper'>
                <h3>Tic Tac Toe - GA</h3>

                <ul className="list">
                  <li className='tech'>JavaScript</li>
                  <li className='tech'>HTML 5</li>
                  <li className='tech'>CSS</li>
                </ul>

                <p className='project-text'>Feel free to play a classic game of Tic Tac Toe where you are able to select from a variety of themes.</p>

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
              </section>
            </div>

            <aside>
              <img src={ticTacToeImage} alt="" />
            </aside>
        </div>
      </section>
    </div>
  )
}

export default Projects