using System;

public class Kata
{
    public static string WhatCentury(string year)
    {
        int y = int.Parse(year);
        int century = (y + 99) / 100;
        
        if (century % 100 >= 11 && century % 100 <= 13)
            return century + "th";
            
        switch (century % 10)
        {
            case 1: return century + "st";
            case 2: return century + "nd";
            case 3: return century + "rd";
            default: return century + "th";
        }
    }
}