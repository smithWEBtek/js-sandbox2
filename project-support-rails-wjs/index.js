const kickoffs = [
  { title: "susan-fowler-190208", repo: "https://github.com/smithWEBtek/protest-weekly-app/tree/brad2", id: "_rRkRKJCmog" },
  { title: "greg-morgan-190206", repo: "https://github.com/vibraniumforge/marvel-battles/tree/jsrefactor", id: "PHWnbQzpl6Y" },
  { title: "jenny-kam-190202", repo: "https://github.com/smithWEBtek/my-bar/tree/brad2", id: "TqkPWuaOfEo" },
  { title: "carol-green-190201", repo: "https://github.com/smithWEBtek/top-jobs/tree/brad", id: "tOJMYABjWPc" },
  { title: "matt-crooks-190131", repo: "https://github.com/smithWEBtek/gamefan-manager-JS/tree/brad", id: "9pW32HSLU-o" },
  { title: "erman-bekaroglu-190131", repo: "https://github.com/smithWEBtek/Virtual_Farm_JS/tree/brad", id: "1SJdqd9b2Cs" },
  { title: "ari-roitblat-190129", repo: "https://github.com/smithWEBtek/javascript-jobs/tree/brad2", id: "iCcSn2dKygY" }
]

const studyGroups = [
  { title: "rails-wjs-study-group-requirements", description: 'requirements overview', repo: 'https://github.com/smithWEBtek/ajaxblog', id: "b93S2_Hc8z8" },
  { title: "rails-wjs-study-group-debugging session1", description: 'debugging session1', id: "cNdLM7Mwm0g" },
  { title: "rails-wjs-study-group-debugging session2", description: 'debugging session2', id: "nUNwFHugNr8" }
]


function kickoffVideos() {
  let rendered = kickoffs.map(video => {
    return (`
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-50x50">
                <iframe width="300" height="30" src="https://www.youtube.com/embed/${video.id}" frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen></iframe>
              </figure>
            </div>
            <div class="media-content">
              <p class="subtitle">${video.title}</p>
              <p class="subtitle is-6"> <a href=${video.repo} target='blank'>Code for this video</a></p>
            </div>
          </div>
        </div>
      </div>
    `)
  }).join('')
  document.getElementById('kickoff').innerHTML += rendered
}

function loadStudyGroupVideos() {
  let rendered = studyGroups.map(video => {
    return (`
    <div class="card">
        <div class="card-content">
        <div class="media">
            <div class="media-left">
            <figure class="image is-50x50">
            <iframe width="300" height="30" src="https://www.youtube.com/embed/${video.id}" frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope" allowFullScreen></iframe>
              </figure>
            </div>
            <div class="media-content">
            <p class="subtitle">${video.title}</p>
            <p class="subtitle">${video.description}</p>
            </div>
          </div>
        </div>
      </div>
    `)
  }).join('')
  document.getElementById('study-groups').innerHTML += rendered
}

kickoffVideos();
loadStudyGroupVideos();