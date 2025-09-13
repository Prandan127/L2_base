using System;

public class SplitString
{
    public static string[] Solution(string str)
    {
        int length = (str.Length + 1) / 2;
        string[] result = new string[length];
        
        for (int i = 0; i < length; i++)
        {
            int start = i * 2;
            if (start + 1 < str.Length)
                result[i] = str.Substring(start, 2);
            else
                result[i] = str[start] + "_";
        }
        
        return result;
    }
}