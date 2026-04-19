# Code Examples

This directory holds runnable example code that accompanies the learning site.

## Organization

Each topic has its own directory, mirroring the site's chapter structure:

```
code/
  search-algorithms/
    minimax/
    alpha-beta/
    expectimax/
    iterative-deepening/
    transposition-table/
    move-ordering/
    a-star/
    ida-star/
    dijkstra/
  monte-carlo-tree-search/
    mcts/
    uct/
  dynamic-programming/
    mdp/
    bellman/
    value-iteration/
    policy-iteration/
    q-learning/
  reinforcement-learning/
    td-learning/
    sarsa/
    dqn/
    policy-gradient/
    actor-critic/
    ppo/
    self-play/
  incomplete-information/
    cfr/
    mccfr/
  multi-agent/
    nash-equilibrium/
    best-response/
    fictitious-play/
    population-based-training/
  hierarchical-planning/
    htn/
    goap/
    behavior-tree/
    fsm/
```

## Conventions

- Each example directory should contain a `README.md` explaining what it demonstrates.
- Prefer self-contained scripts (single file if possible).
- Include a `requirements.txt` or equivalent if dependencies are needed.
- Keep examples minimal — they illustrate one concept each.
