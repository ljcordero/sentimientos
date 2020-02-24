import Reference from '@/core/models/Reference';

export default class State {
  public loading: boolean;

  public repositoryUrl: string;

  public references: Reference[];

  constructor() {
    this.loading = false;
    this.repositoryUrl = 'https://github.com/ljcordero/sentimientos';
    this.references = [
      {
        href: 'https://www2.imm.dtu.dk/pubdb/views/publication_details.php?id=6010',
        text: 'AFINN-165 Wordlist',
      },
    ];
  }
}
