/*
A log file is provided as a string array where each entry is in the form "user_id timestamp action". 
Each of the values is separated by a space.

Both user_id and timestamp consist only of digits, are at most 9 digits long and start with a non-zero digit.
timestamp represents the time in seconds since the application was last launched
action will be either "sign-in" or "sign-out"
Given a log with entries in no particular order, return an array of strings that denote user_id's of 
users who signed out in maxSpan seconds or less after signing in. 

Return: a string array of user id's, sorted ascending by numeric value
*/

function logAnalysis(logs, maxSpan) {}
module.exports = logAnalysis;
