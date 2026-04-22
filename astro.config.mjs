import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://wethand5.github.io',
  base: '/ai4gaming',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: 'ai4gaming',
      disable404Route: true,
      defaultLocale: 'root',
      sidebar: [
        {
          label: '首页',
          link: '/',
        },
        {
          label: '学习路线',
          link: '/roadmap',
        },
        {
          label: '1. 搜索算法',
          items: [
            { label: '章节概览', link: '/search-algorithms/' },
            { label: 'Hello-Gaming', link: '/search-algorithms/hello-gaming' },
            { label: 'Minimax', link: '/search-algorithms/minimax' },
            { label: 'Alpha-Beta 剪枝', link: '/search-algorithms/alpha-beta' },
            { label: 'Expectimax', link: '/search-algorithms/expectimax' },
            { label: '迭代加深', link: '/search-algorithms/iterative-deepening' },
            { label: '置换表', link: '/search-algorithms/transposition-table' },
            { label: '走法排序', link: '/search-algorithms/move-ordering' },
            { label: 'A*', link: '/search-algorithms/a-star' },
            { label: 'IDA*', link: '/search-algorithms/ida-star' },
            { label: 'Dijkstra', link: '/search-algorithms/dijkstra' },
          ],
        },
        {
          label: '2. 蒙特卡洛树搜索',
          items: [
            { label: '章节概览', link: '/monte-carlo-tree-search/' },
            { label: 'MCTS', link: '/monte-carlo-tree-search/mcts' },
            { label: 'UCT', link: '/monte-carlo-tree-search/uct' },
          ],
        },
        {
          label: '3. 动态规划',
          items: [
            { label: '章节概览', link: '/dynamic-programming/' },
            { label: 'MDP', link: '/dynamic-programming/mdp' },
            { label: 'Bellman 方程', link: '/dynamic-programming/bellman' },
            { label: '值迭代', link: '/dynamic-programming/value-iteration' },
            { label: '策略迭代', link: '/dynamic-programming/policy-iteration' },
            { label: 'Q-Learning', link: '/dynamic-programming/q-learning' },
          ],
        },
        {
          label: '4. 强化学习',
          items: [
            { label: '章节概览', link: '/reinforcement-learning/' },
            { label: 'TD Learning', link: '/reinforcement-learning/td-learning' },
            { label: 'SARSA', link: '/reinforcement-learning/sarsa' },
            { label: 'DQN', link: '/reinforcement-learning/dqn' },
            { label: '策略梯度', link: '/reinforcement-learning/policy-gradient' },
            { label: 'Actor-Critic', link: '/reinforcement-learning/actor-critic' },
            { label: 'PPO', link: '/reinforcement-learning/ppo' },
            { label: '自我对弈', link: '/reinforcement-learning/self-play' },
          ],
        },
        {
          label: '5. 不完全信息',
          items: [
            { label: '章节概览', link: '/incomplete-information/' },
            { label: 'CFR', link: '/incomplete-information/cfr' },
            { label: 'MCCFR', link: '/incomplete-information/mccfr' },
          ],
        },
        {
          label: '6. 多智能体与博弈论',
          items: [
            { label: '章节概览', link: '/multi-agent/' },
            { label: 'Nash 均衡', link: '/multi-agent/nash-equilibrium' },
            { label: '最佳应对', link: '/multi-agent/best-response' },
            { label: '虚拟博弈', link: '/multi-agent/fictitious-play' },
            { label: '基于种群的训练', link: '/multi-agent/population-based-training' },
          ],
        },
        {
          label: '7. 分层规划',
          items: [
            { label: '章节概览', link: '/hierarchical-planning/' },
            { label: 'HTN', link: '/hierarchical-planning/htn' },
            { label: 'GOAP', link: '/hierarchical-planning/goap' },
            { label: '行为树', link: '/hierarchical-planning/behavior-tree' },
            { label: 'FSM', link: '/hierarchical-planning/fsm' },
          ],
        },

        {
          label: '相关项目',
          items: [
          { label: '章节概览', link: '/projs/' },
          { label: 'VLA for FireboyAndWatergirl', link: '/projs/vla_fb_wg' },
          { label: 'VLA for StarCraft2 mini-games', link: '/projs/vla_sc2' },
            
          ],
        },
      ],
      customCss: ['/src/styles/custom.css'],
    }),
  ],
});
