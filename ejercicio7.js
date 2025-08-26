const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const categorizedTracks = {};

for (let i = 0; i < tracks.length; i++) {
  const track = tracks[i];
  const genre = track.genre;

  if (!categorizedTracks[genre]) {
    categorizedTracks[genre] = [];
  }
  categorizedTracks[genre].push(track);
}

console.log(categorizedTracks);