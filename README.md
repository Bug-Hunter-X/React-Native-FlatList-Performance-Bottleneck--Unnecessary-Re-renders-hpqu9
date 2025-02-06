# React Native FlatList Performance Issue: Unnecessary Re-renders

This repository demonstrates a common performance issue in React Native's FlatList component, specifically the problem of unnecessary re-renders.  The bug showcases a scenario where a complex component structure and lack of proper memoization techniques lead to significant UI lag and dropped frames when scrolling through a moderately sized dataset.

The solution employs several optimization strategies, including `useMemo` and `React.memo`, to drastically improve performance and reduce the number of unnecessary re-renders.  This example highlights the importance of optimizing list item rendering in large React Native applications.

## Bug

The `FlatListBug.js` file demonstrates the issue. The FlatListItem component is complex, and it re-renders unnecessarily on every state change of the FlatList, regardless of whether the actual data for that particular item has changed.  This leads to slow scrolling and visual glitches.

## Solution

`FlatListBugSolution.js` demonstrates the corrected implementation.  The solution uses `React.memo` to prevent unnecessary re-renders when the item's props haven't changed and `useMemo` to memoize expensive computations that are only dependent on the item's props.