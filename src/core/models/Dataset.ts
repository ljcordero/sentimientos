interface Dataset {
  source: string;
  value: string;
  key: string;
}

export const TweetTASS: Dataset = {
  source: 'tweet-tass-sepln.json',
  value: 'tweet',
  key: 'class',
};

export default Dataset;
