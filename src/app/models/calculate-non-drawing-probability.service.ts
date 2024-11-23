import { Injectable } from '@angular/core';
import { Probability } from './types/NonDrawingProbability';

@Injectable({
  providedIn: 'root',
})
export class CalculateNonDrawingProbabilityService {
  calculate({ odds, pulls }: { odds: number; pulls: number }): Probability {
    const nonDrawing = (1 - odds / 100) ** pulls;

    return {
      notPulling: nonDrawing,
      pulling: 1 - nonDrawing,
    };
  }
}
