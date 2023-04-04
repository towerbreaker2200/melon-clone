import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  playtime: Number,
  playcount: Number,
});

const Song = mongoose.model("Song", songSchema);

export default Song;
