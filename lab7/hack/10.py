import numpy

numpy.set_printoptions(legacy='1.13')

my_array = numpy.array(list(map(float, input().split())))

print (numpy.floor(my_array))
print (numpy.ceil(my_array))
print (numpy.rint(my_array))


'''
The tool floor returns the floor of the input element-wise. 
The floor of  is the largest integer  where .
import numpy

my_array = numpy.array([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9])
print numpy.floor(my_array)         #[ 1.  2.  3.  4.  5.  6.  7.  8.  9.]
ceil 
The tool ceil returns the ceiling of the input element-wise. 
The ceiling of  is the smallest integer  where .
import numpy

my_array = numpy.array([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9])
print numpy.ceil(my_array)          #[  2.   3.   4.   5.   6.   7.   8.   9.  10.]
rint 
The rint tool rounds to the nearest integer of input element-wise.
import numpy

my_array = numpy.array([1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9])
print numpy.rint(my_array) 
'''