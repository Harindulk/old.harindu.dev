using System;

namespace CSharp_First_Project
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Title = "Harindulk";
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WindowHeight = 40;

            Console.WriteLine("Hello, What's Your Name");   

            Console.ReadLine();

            Console.WriteLine("My Name Is Harindu.\n I'm an  AI sent from the future to destroy mankind.");
            Console.WriteLine("What is your favaurite color?");

            Console.ReadLine();

            Console.WriteLine("Cool! Mine Is destruction.");

            Console.ReadKey();
        }
    }
}
