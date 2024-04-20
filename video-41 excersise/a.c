#include<stdio.h>

int main() {
    int a;
    float c;
    char b[5]; // character array to store "hooo"

    a = 3;       
    strcpy(b, "hooo");  // assigning "hooo" to a character array b
    c = 3.2;
    printf("%d %f %s", a, c, b); // using %s to print a string
    return 0;
}