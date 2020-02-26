import Reference from '@/core/models/Reference';
import Evaluation from '@/core/models/Evaluation';
import EvaluationService from '@/core/services/EvaluationService';
import AfinnService from '@/core/services/AfinnService';
import NaiveBayesService from '@/core/services/NaiveBayesService';
import EvaluationType from '@/core/models/EvaluationType';

export default class State {
  public loading: boolean;

  public repositoryUrl: string;

  public references: Reference[];

  public evaluation: EvaluationService = new EvaluationService([
    new Evaluation({
      type: EvaluationType.AFINN_165,
      classifier: new AfinnService(),
    }),
    new Evaluation({
      type: EvaluationType.NaiveBayes,
      classifier: new NaiveBayesService(),
    }),
  ]);

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
