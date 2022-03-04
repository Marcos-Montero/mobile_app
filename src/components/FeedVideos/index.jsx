import VideoPlayer from '../VideoPlayer'

const VIDEOS = [
  {
    id: 1,
    author: 'hehey',
    text: 'mira no puedo mas JAJAJAJA ',
    likes: 1222,
    shares: 500,
    comments: 234,
    songTitle: 'sonido original - 👧🏼𝗗𝗔𝗡𝗔𝗘&𝗗𝗔𝗞𝗢𝗧𝗔🐕‍',
    albumCover: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/11d7a8628f1dd07d38bd4ef25be6d635~c5_720x720.jpeg?x-expires=1646521200&x-signature=EW1F2k%2BzE2pT1AKvIr4tbW2H3gA%3D',
    src:
    'https://v16-webapp.tiktok.com/0523a5dc2a376ddd2d9b72da3ea222f6/6222e10d/video/tos/maliva/tos-maliva-ve-0068c799-us/1b2b9caa8bcc459cb1df68f2b7a3afc4/?a=1988&br=2322&bt=1161&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-307nz7ThFpLCDXq&l=20220304220313010223128050111199FB&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2o8N2c6ZmQ3OjMzZzczNEApOGg2NGdlZmQ7Nzs2PDVkOWdtL2VucjQwNXJgLS1kMS9zc2NjYWNjYGEtLWFjNmJiYDA6Yw%3D%3D&vl=&vr='

  },
  {
    id: 2,
    author: 'anitagnzalez',
    text: 'Se independizan las bebés',
    likes: 1323,
    shares: 2434,
    comments: 3533,
    songTitle: 'sonido original - 👧🏼𝗗𝗔𝗡𝗔𝗘&𝗗𝗔𝗞𝗢𝗧𝗔🐕‍',
    albumCover: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/11d7a8628f1dd07d38bd4ef25be6d635~c5_720x720.jpeg?x-expires=1646521200&x-signature=EW1F2k%2BzE2pT1AKvIr4tbW2H3gA%3D',
    src: 'https://v16-webapp.tiktok.com/498c4a5a99c2deadda281a1ae1468ce5/6222eed1/video/tos/useast2a/tos-useast2a-ve-0068c002/e2f7a26310e847b5b0f1c7beb473041f/?a=1988&br=3260&bt=1630&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-307nz7Th2.oCDXq&l=202203042259540102230841430F194EEB&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amk2aWc6Zm54OzMzNzczM0ApZGQ8NzdpO2Q1NzM6PDppaWdyNGdecjQwMjZgLS1kMTZzczYxXi0uMi0yMmFiLi4uLy46Yw%3D%3D&vl=&vr='
  },
  {
    id: 3,
    author: 'danaeydakota',
    text: 'Se independizan las bebés',
    likes: 1232,
    shares: 2334,
    comments: 3633,
    songTitle: 'sonido original - 👧🏼𝗗𝗔𝗡𝗔𝗘&𝗗𝗔𝗞𝗢𝗧𝗔🐕‍',
    albumCover: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/11d7a8628f1dd07d38bd4ef25be6d635~c5_720x720.jpeg?x-expires=1646521200&x-signature=EW1F2k%2BzE2pT1AKvIr4tbW2H3gA%3D',
    src: 'https://v16-webapp.tiktok.com/e46b14142cc03a5bd41aa0eeceb4460d/6222eefe/video/tos/useast2a/tos-useast2a-ve-0068c004/2ab60b1afdf24434a431b1a5a480fdcb/?a=1988&br=3326&bt=1663&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-307nz7ThEioCDXq&l=202203042302360102231280501119994D&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=Mzl0OzQ6Zm15OzMzNzczM0ApN2k5ODdpZzxlNzw8aGY5NWdiaW9hcjQwMDJgLS1kMTZzczFfMzEwXjAzMS1eL15gNi46Yw%3D%3D&vl=&vr='
  }
]
export default function FeedVideos () {
  return (
    VIDEOS.map(video => (
      <VideoPlayer key={video.id} {...video} />
    ))
  )
}
