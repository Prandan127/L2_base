using System;

public class Kata
{
    public static string WhatCentury(string year)
    {
        return Convert.ToString((int.Parse(year) + 99) / 100);
    }
}