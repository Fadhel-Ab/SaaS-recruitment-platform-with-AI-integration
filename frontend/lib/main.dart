import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import 'app/app.dart';

import 'core/api/dio_client.dart';
import 'core/storage/token_storage.dart';

import 'features/auth/data/auth_api.dart';
import 'features/auth/data/auth_repository.dart';
import 'features/auth/bloc/auth_bloc.dart';

void main() {
  final dioClient = DioClient();

  final tokenStorage = TokenStorage();

  final authApi = AuthApi(dioClient.dio);

  final authRepository = AuthRepository(authApi, tokenStorage);

  runApp(
    RepositoryProvider.value(
      value: authRepository,

      child: BlocProvider(
        create: (_) => AuthBloc(authRepository),

        child: const RecruitmentApp(),
      ),
    ),
  );
}
