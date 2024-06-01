const btnSwitch = document.querySelector('.switch')
function btn() {
    const body = document.querySelector('body')
    body.classList.toggle('dark-modes')
}
const catchData = () => {
    fetch('http://localhost:3000/socialMediaMetrics')
        .then(response => response.json())
        .then(data => {
            const fb = document.getElementById('fbfollowers')
            const tw = document.getElementById('twfollowers')
            const ig = document.getElementById('igfollowers')
            const yt = document.getElementById('ytfollowers')
            const twfollowers = data.twitter.followers
            const igfollowers = data.instagram.followers
            const fbfollowers = data.facebook.followers
            const ytfollowers = data.youtube.followers
            fb.innerHTML = fbfollowers
            tw.innerHTML = twfollowers
            ig.innerHTML = igfollowers
            yt.innerHTML = ytfollowers
            const page = document.getElementById('fbviews')
            const pagefb = data.facebook.pageViews
            page.innerHTML = pagefb
            const likes = document.getElementById('fblikes')
            const likesfb = data.facebook.likes
            likes.innerHTML = likesfb
            const likesig = document.getElementById('iglikes')
            const likesigf = data.instagram.likes
            likesig.innerHTML = likesigf
            const likesyt = document.getElementById('ytlikes')
            const likesytf = data.youtube.likes
            likesyt.innerHTML = likesytf
            const twretweets= document.getElementById('twretweets')
            const twretweetsf = data.twitter.pageViews
            twretweets.innerHTML = twretweetsf
            const viewsig = document.getElementById('igviews')
            const viewsigf = data.instagram.pageViews
            viewsig.innerHTML = viewsigf
            const viewsyt = document.getElementById('ytviews')
            const viewsytf = data.youtube.pageViews
            viewsyt.innerHTML = viewsytf



        })

}
catchData()

