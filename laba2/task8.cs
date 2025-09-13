using System;
using System.Collections.Generic;

public static class Kata 
{
    public static string ExpandedForm(long num) 
    {
        List<string> parts = new List<string>();
        string numStr = num.ToString();
        
        for (int i = 0; i < numStr.Length; i++)
        {
            if (numStr[i] != '0')
            {
                parts.Add(numStr[i] + new string('0', numStr.Length - i - 1));
            }
        }
        
        return string.Join(" + ", parts);
    }
}