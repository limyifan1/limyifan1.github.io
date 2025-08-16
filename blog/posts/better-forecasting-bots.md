
There are two main categories of benchmarks: 
1. Static Benchmark
    1. Consist of data from specific periods in the past that have already been resolved.
    2. However, LLMs might be pre-trained on future events or fed news about the resolution. 

2. Dynamic Benchmark
    1. Continuously update their question sets and resolution information from the latest databases.
    2. We see this in [ForecastBench](https://ar5iv.labs.arxiv.org/html/2409.19839).

Above is partially referenced from [Advancing Event Forecasting through Massive Training of Large Language Models](https://arxiv.org/html/2507.19477v1).




Currently in research, a common architecture for forecast bots is:
1. Summarize relevant news articles
2. Add the summary in-context to LLMs and ask for a prediction

This was introduced in [AutoCast++](https://openreview.net/pdf?id=COYDmKkQH4) and is used by [ForecastBench](https://ar5iv.labs.arxiv.org/html/2409.19839) and [Approaching Human-Level Forecasting with Language Models](https://openreview.net/pdf?id=FlcdW7NPRY). 



News articles -> Retrieve relevant 