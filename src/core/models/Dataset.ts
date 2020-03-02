interface Dataset {
  source: string;
  value: string;
  key: string;
  processed?: string;
}

export const TweetTASS: Dataset = {
  source: 'tweet-tass-sepln.json',
  value: 'tweet',
  key: 'class',
  processed: 'tweet-tass-sepln-processed.json',
};

export default Dataset;
