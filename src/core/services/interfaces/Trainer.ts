interface Trainer {
  train(text: string, label: string): void;
  restore(processed: {}): void;
}

export default Trainer;
