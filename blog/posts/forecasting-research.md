### [Advancing Event Forecasting through Massive Training of Large Language Models: Challenges, Solutions, and Broader Impacts](https://arxiv.org/html/2507.19477v1)

### [Approaching Human-Level Forecasting with Language Models](https://openreview.net/pdf?id=FlcdW7NPRY)
Github: https://github.com/dannyallover/llm_forecasting
3 main steps used: 1) Retrieval 2) Reasoning 3) Aggregation

Retrieval system used: LM takes questions, generate search queries to retrieve articles from historical news API. LM ranks articles based on relevancy and summarize top k articles.

Reasoning system used: Take in question and summarized articles then prompts LLMs to generate forecasts. 

Prompting: A scratchpad reasoning prompt was found to give the lowest Brier score by giving instructions to guide the model’s reasoning path. 
```
1. Given the above question, rephrase and expand it to help you do better answering. Maintain all
information in the original question.
{{ Insert rephrased and expanded question. }}
2. Using your knowledge of the world and topic, as well as the information provided, provide a few
reasons why the answer might be no. Rate the strength of each reason.
{{ Insert your thoughts }}
3. Using your knowledge of the world and topic, as well as the information provided, provide a few
reasons why the answer might be yes. Rate the strength of each reason.
{{ Insert your thoughts }}
4. Aggregate your considerations. Think like a superforecaster (e.g. Nate Silver).
{{ Insert your aggregated considerations }}
5. Output an initial probability (prediction) given steps 1-4.
{{ Insert initial probability }}
6. Evaluate whether your calculated probability is excessively confident or not confident enough. Also,
consider anything else that might affect the forecast that you did not before consider (e.g. base rate of
the event).
{{ Insert your thoughts }}
7. Output your final prediction (a number between 0 and 1) with an asterisk at the beginning and end
of the decimal.
{{ Insert your answer }}
```

For "Crowd Uncertain" questions, the LLM system actually outperforms crowd predictions. 

Fine-tune a LLM on forecast data that outperform the crowd. 

### [ForecastBench: A Dynamic Benchmark of AI Forecasting Capabilities](https://ar5iv.labs.arxiv.org/html/2409.19839)
3 types of context provided: zero-shot prompting, scratchpad prompting, and scratchpad prompting with retrieval augmentation. Methods from [Approaching Human-Level Forecasting with Language Models](https://openreview.net/pdf?id=FlcdW7NPRY) were used for scratchpad prompting and retrieval augmentation. 

### [Outcome-based Reinforcement Learning to Predict the Future](https://arxiv.org/pdf/2505.17989)

### [Forecasting Future World Events with Neural Networks](https://arxiv.org/pdf/2206.15474)
Introduce Autocast, a dataset containing thousands of forecasting questions and an accompanying news corpus. Curated a corpus of news items
from [Common Crawl](https://commoncrawl.org/). 

### [AUTOCAST++: ENHANCING WORLD EVENT PREDICTION WITH ZERO-SHOT RANKING-BASED CONTEXT RETRIEVAL](https://openreview.net/pdf?id=COYDmKkQH4) 
Built retrieval system on top of Autocast to improve accuracy. 

### [ForecastQA: A Question Answering Challenge for Event Forecasting with Temporal Text Data](https://aclanthology.org/2021.acl-long.357.pdf)
First generated dataset for forecasting using crowd workers. Generated questions by getting news articles and splitting them into disjoint sets: articles for retrieval and articles for generating questions. 

### [Superhuman Automated Forecasting](https://safe.ai/blog/forecasting)
Bot based on GPT-4o can provide probabilities for various user queries. When tested on 177 past events from the Metaculus forecasting platform, FiveThirtyNine achieved an accuracy of 87.7%, slightly outperforming the Metaculus crowd's accuracy of 87.0%. 