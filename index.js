const element = (
  // Write your code here.
  <div className='congrats-card-container'>
    <h1 class='heading'>congratulations</h1>
    <div class='card'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='profile-image'
      />
      <h1 className='card-title'>Tim Seifert</h1>
      <p className='card-description'>Football player</p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='watch-image'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
