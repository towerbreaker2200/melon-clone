import Song from "../models/Song";

export const home = async (req, res) => {
  const data = await Song.find({});
  const Songs = data.sort((a, b) => b.playcount - a.playcount).splice(0, 10);
  return res.render("home", {
    pageTitle: "Home",
    Songs,
    playingSong: {
      title: null,
    },
  });
};

export const play = async (req, res) => {
  const data = await Song.find({});
  const Songs = data.sort((a, b) => b.playcount - a.playcount).splice(0, 10);
  let { id } = req.params;
  const playingSong = await Song.find({ id: id });
  console.log(playingSong);
  return res.render("home", {
    pageTitle: "play",
    Songs,
    playingSong,
  });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });

export const postUpload = async (req, res) => {
  const { title, artist, playtime, playcount } = req.body;
  await Song.create({
    title: title,
    artist: artist,
    playtime: +playtime,
    playcount: +playcount,
  });
  return res.redirect("/");
};
