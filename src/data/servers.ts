export interface DiscordServer {
  name: string;
  role: string;
  members: string;
  invite: string;
  guildId: string;
  iconHash: string | null;
}

const cdn = (id: string, hash: string) =>
  `https://cdn.discordapp.com/icons/${id}/${hash}.${hash.startsWith("a_") ? "gif" : "png"}?size=128`;

export const SERVERS: DiscordServer[] = [
  { name: "AxonMC (Prism SMP)", role: "Owner", members: "700+", invite: "https://discord.gg/7vZa9NbMv9", guildId: "1357507103744589946", iconHash: "2a57ddb7d9c4b67e6883f7fc89a5f2e4" },
  { name: "SMP Finder", role: "Mod", members: "45K+", invite: "https://discord.gg/hK4mjQKQ2p", guildId: "1186462339743105045", iconHash: "58063b2c7140f83e0954229229536581" },
  { name: "MineHeart", role: "Helper", members: "25K+", invite: "https://discord.gg/NgRUANh3PT", guildId: "802570566879412265", iconHash: "9f2156f1957471ee0437ceff53128eb2" },
  { name: "PotionMC", role: "Retired Mod", members: "6.5K+", invite: "https://discord.gg/4naPwSQ8ms", guildId: "952434192862564352", iconHash: "b0cd03eb0371234c4d0d84b7548b7ace" },
  { name: "StaticPVP", role: "Retired Mod", members: "6.2K+", invite: "https://discord.gg/bg9X2jQgKy", guildId: "1396136303615283250", iconHash: "e425cfe820415bdafc6dea521ace453c" },
  { name: "Cavern", role: "Retired Jr. Mod", members: "5.9K+", invite: "https://discord.gg/hXwgFMFh7B", guildId: "1042576517470900265", iconHash: "a83e6346ab5919269a4e579691835216" },
  { name: "Echo Network", role: "Retired Helper", members: "3K+", invite: "https://discord.gg/TGQ4azvzHp", guildId: "1332821874014425212", iconHash: "3df298fc3150a33a9ed83c672308fbc9" },
  { name: "KyroMC", role: "Retired Admin + CMA", members: "3.5K+", invite: "https://discord.gg/dMjq9NJCYT", guildId: "1277988056804102197", iconHash: "b1548d23e330e583237b883ebacb7a6b" },
  { name: "ClassicMC", role: "Retired Mod", members: "1.6K+", invite: "https://discord.gg/UTZyrFgDAJ", guildId: "1340404185857916968", iconHash: "0f38730b85e63b623362ec38b6caaa76" },
  { name: "FireSMP", role: "Retired Manager", members: "1.5K+", invite: "https://discord.gg/2eCbZtJWxM", guildId: "", iconHash: null },
];

export const serverIcon = (s: DiscordServer) =>
  s.iconHash && s.guildId ? cdn(s.guildId, s.iconHash) : null;
